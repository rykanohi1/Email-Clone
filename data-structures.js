const emailClient = {
    folders: [],
    emails: [],
    menuButtons: []
}

const folder = {folderName: '', count: 0, isSelected: false, id: '', folderCount: {
    hasUnread: false,
    count: 0
}}

const emailListItem = {isChecked: false, sender: '', subject: '', preview: '' , date: undefined, folderIds: []}

const menuButton = {isSelected: false, isHighlighted: false, label: '', img: ''}