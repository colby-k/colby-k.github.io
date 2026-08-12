from pathlib import Path

path = Path('auditticks-pro/guide/index.md')
text = path.read_text(encoding='utf-8')

text = text.replace('v1.2.29', 'v1.2.30')
text = text.replace('up to eight keyboard shortcuts', 'up to ten keyboard shortcuts')
text = text.replace('Map up to eight shortcuts.', 'Map up to ten shortcuts.')
text = text.replace('up to eight mappings', 'up to ten mappings')
text = text.replace('showing eight configurable keyboard shortcut slots', 'showing configurable keyboard shortcut slots')
text = text.replace('Configure up to eight keyboard shortcuts in Settings by pairing a key combination with an AuditTicks action.', 'Configure up to ten keyboard shortcuts in Settings by pairing a key combination with an AuditTicks action.')

path.write_text(text, encoding='utf-8')
