const githubBase = `https://github.com/lexmin0412`

const data = [
	{
		title: 'taro2-template',
	},
	{
		title: 'taro3-react-template',
	},
	{
		title: 'gcm',
	},
	{
		title: 'tarox-ui',
	},
	{
		title: 'init',
	},
	{
		title: 'antd-components-enhanced'
	},
	{
		title: 'todolist-svelte',
	},
	{
		title: 'smart-calculator'
	},
	{
		title: 'pick-me',
	},
	{
		title: 'advanced-stack-park'
	},
	{
		title: 'api-server'
	},
	{
		title: 'annual-review'
	},
	{
		title: 'spacex'
	},
	{
		title: 'home'
	},
	{
		title: 'env-config-manager'
	},
	{
		title: 'typescript-project-creator'
	},
	{
		title: 'image-it'
	},
	{
		title: 'navigation-bar'
	},
	{
		title: 'git-dance'
	},
	{
		title: 'notifier'
	},
	{
		title: 'repository-creator'
	},
	{
		title: 'github-api'
	},
	{
		title: 'ssh-deploy'
	},
	{
		title: 'my-github-app'
	},
	{
		title: 'taro-plugin-internal'
	},
	{
		title: 'js_reminder'
	},
	{
		title: 'create-opensouce-lib'
	},
	{
		title: 'jd-scrum-practices'
	},
	{
		title: 'react-dnd-anything'
	},
	{
		title: 'learning-rust'
	},
	{
		title: 'awesome-badges'
	},
	{
		title: 'vite-react-zhihu'
	},
	{
		title: 'web-component'
	},
	{
		title: 'simulate-interview'
	},
	{
		title: 'cooking-skills'
	},
	{
		title: 'fe-standard'
	},
	{
		title: 'gallery'
	},
	{
		title: 'logx'
	}
]

const createLinkTagAndJump = (url, isNewTab) => {
	const link = document.createElement('a')
	link.setAttribute('href', url)
	link.setAttribute('target', isNewTab ? '_blank' : '_self')
	link.click()
	link.remove()
}

const renderRepoList = () => {
	const repoListDom = document.querySelector('#repo-list')
	data.forEach((item) => {
		let html = ''
		html += `<div class="subtitle">${item.title}</div>`
		html += `<button data-name='${item.title}' class="button is-link visit-button"> visit </button>`
		repoListDom.innerHTML += `<div class="column is-3">
						<div class="box">
							${html}
						</div>
					</div>`
	})
}

const addNoticeDeleteListener = () => {
	const noticeDeleteBtn = document.querySelector('#delete-notice')
	const notificationContainer = document.querySelector('#notification')
	noticeDeleteBtn.addEventListener('click', ()=>{
		notificationContainer.remove()
	})
}

const bindClickEvents = () => {
	document.querySelectorAll('.visit-button').forEach((item) => {
		item.addEventListener('click', (event) => {
			const { name } = event.target.dataset
			console.log('event', name)
			const url = `${githubBase}/${name}`
			createLinkTagAndJump(url, true)
		})
	})
}

window.onload = function () {
	renderRepoList()
	bindClickEvents()
	addNoticeDeleteListener()
}
