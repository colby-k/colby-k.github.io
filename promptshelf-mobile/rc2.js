(()=>{"use strict";
const RECENT_KEY="promptshelf-mobile-recent-v1",MAX_RECENT=12;
let recentMode=false,copyResetTimer=null;
const $=id=>document.getElementById(id);
function cardKey(card){const title=card?.querySelector(".card-title span:first-child")?.textContent?.trim()||"";const path=card?.querySelector(".path")?.textContent?.trim()||"";return `${title}\n${path}`}
function readRecent(){try{const value=JSON.parse(localStorage.getItem(RECENT_KEY)||"[]");return Array.isArray(value)?value.map(String).filter(Boolean).slice(0,MAX_RECENT):[]}catch{return[]}}
function remember(card){const key=cardKey(card);if(!key.trim())return;const next=[key,...readRecent().filter(x=>x!==key)].slice(0,MAX_RECENT);try{localStorage.setItem(RECENT_KEY,JSON.stringify(next))}catch{}}
function setTab(name){document.querySelectorAll("[data-mobile-tab]").forEach(button=>{const active=button.dataset.mobileTab===name;button.classList.toggle("active",active);button.setAttribute("aria-current",active?"page":"false")})}
function restoreEmpty(){const e=$("empty");if(e)e.textContent="No prompts found."}
function syncNativeTab(){if(recentMode)return;restoreEmpty();if($("favChip")?.classList.contains("active"))setTab("favorites");else if($("folderChip")?.classList.contains("active"))setTab("folders");else setTab("all")}
function applyRecent(){if(!recentMode)return;const ids=readRecent(),set=new Set(ids),cards=[...document.querySelectorAll("#promptList .card")];let visible=0;for(const card of cards){const key=cardKey(card),show=set.has(key);card.hidden=!show;if(show){card.style.order=String(ids.indexOf(key));visible++}else card.style.removeProperty("order")}if($("count"))$("count").textContent=`${visible} prompt${visible===1?"":"s"}`;if($("viewTitle"))$("viewTitle").textContent="Recent";const empty=$("empty");if(empty){empty.classList.toggle("hidden",visible>0);empty.textContent=ids.length?"No recent prompts match the current search.":"No recent prompts yet. Open a prompt and it will appear here."}setTab("recent")}
function openNative(buttonId,tab){recentMode=false;restoreEmpty();$(buttonId)?.click();setTab(tab)}
function openRecent(){recentMode=false;$("allChip")?.click();recentMode=true;applyRecent()}
function syncBarVisibility(){const library=$("library"),bar=$("mobileTabBar");if(!library||!bar)return;const visible=!library.classList.contains("hidden");bar.hidden=!visible;document.body.classList.toggle("mobile-library-loaded",visible)}
function enhanceCopy(){const button=$("copyBtn");if(!button)return;button.addEventListener("click",()=>{clearTimeout(copyResetTimer);const normal=button.dataset.defaultLabel||button.textContent||"Copy Prompt";button.dataset.defaultLabel=normal==="Copied ✓"?"Copy Prompt":normal;setTimeout(()=>{const error=$("promptError");if(error&&!error.classList.contains("hidden")&&error.textContent.trim())return;button.textContent="Copied ✓";button.classList.add("copied-state");copyResetTimer=setTimeout(()=>{button.textContent=button.dataset.defaultLabel||"Copy Prompt";button.classList.remove("copied-state")},1300)},100)})}
function init(){if(!$("mobileTabBar"))return;
$("tabAllButton")?.addEventListener("click",()=>openNative("allChip","all"));
$("tabRecentButton")?.addEventListener("click",openRecent);
$("tabFavoritesButton")?.addEventListener("click",()=>openNative("favChip","favorites"));
$("tabFoldersButton")?.addEventListener("click",()=>{recentMode=false;restoreEmpty();setTab("folders");$("folderChip")?.click()});
$("favChip")?.addEventListener("click",()=>{recentMode=false;setTimeout(syncNativeTab,0)});
$("allChip")?.addEventListener("click",()=>{if(!recentMode)setTimeout(syncNativeTab,0)});
$("folderDialog")?.addEventListener("close",()=>setTimeout(syncNativeTab,0));
$("promptList")?.addEventListener("click",event=>{const card=event.target.closest?.(".card");if(!card)return;remember(card);if(recentMode)setTimeout(applyRecent,0)},true);
$("search")?.addEventListener("input",()=>{if(recentMode)setTimeout(applyRecent,0)});
if($("promptList"))new MutationObserver(()=>{if(recentMode)applyRecent()}).observe($("promptList"),{childList:true});
if($("library"))new MutationObserver(syncBarVisibility).observe($("library"),{attributes:true,attributeFilter:["class"]});
enhanceCopy();syncBarVisibility();syncNativeTab();}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});else init();
})();