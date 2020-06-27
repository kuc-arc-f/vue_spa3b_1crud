import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/Home'
import about from '../components/About'

import tasksIndex from '../components/Tasks/Index'
import tasksNew from '../components/Tasks/new'
import tasksTest from '../components/Tasks/test'
import tasksShow from '../components/Tasks/show'
import tasksEdit from '../components/Tasks/edit'
import tasksTestChild from '../components/Tasks/test_child'
import tasksTestVuex from '../components/Tasks/test_vuex'

/* index-tasks */
//import indexTasksTest from '../components/IndexTasks/test_db'
//import indexTasksTest2 from '../components/IndexTasks/test_db2'
//import indexTasksTest3 from '../components/IndexTasks/test_db3'
//import indexTasksTest4 from '../components/IndexTasks/test_db4'
/*
import indexTasks from '../components/IndexTasks/Index'
import indexTasksNew from '../components/IndexTasks/new'
import indexTasksShow from '../components/IndexTasks/show'
import indexTasksEdit from '../components/IndexTasks/edit'
*/

/* dexie */
import DexieTasksTest from '../components/DexieTasks/test'
import DexieTasksTest2 from '../components/DexieTasks/test2'
import DexieTasksTest3 from '../components/DexieTasks/test3'
import DexieTasksTest4 from '../components/DexieTasks/test4'
import DexieTasks from '../components/DexieTasks/Index'
import DexieTasksNew  from '../components/DexieTasks/new'
import DexieTasksShow from '../components/DexieTasks/show'
import DexieTasksEdit from '../components/DexieTasks/edit'

//
Vue.use(Router)
//
export default new Router({
	/* mode: 'history', */
	routes: [
		{ path: '/', component: home },
		{ path: '/about', component: about },
		/* tasks */
		{ path: '/tasks/edit/:id', component: tasksEdit },
		{ path: '/tasks', component: tasksIndex },
		{ path: '/tasks/new', component: tasksNew },
		{ path: '/tasks/show/:id', component: tasksShow },
		{ path: '/tasks/test', component: tasksTest },
		{ path: '/tasks/test_child', component: tasksTestChild },
		{ path: '/tasks/vuex', component: tasksTestVuex },
		/* index-tasks*/
		//{ path: '/index_tasks/test', component: indexTasksTest },
		//{ path: '/index_tasks/test2', component: indexTasksTest2 },
		//{ path: '/index_tasks/test3', component: indexTasksTest3 },
		//{ path: '/index_tasks/test4', component: indexTasksTest4 },
		/*
		{ path: '/index_tasks', component: indexTasks },
		{ path: '/index_tasks/new', component: indexTasksNew },
		{ path: '/index_tasks/show/:id', component: indexTasksShow },
		{ path: '/index_tasks/edit/:id', component: indexTasksEdit },
		*/
		/* dexie */
		{ path: '/dexie_tasks/test', component: DexieTasksTest },
		{ path: '/dexie_tasks/test2', component: DexieTasksTest2 },
		{ path: '/dexie_tasks/test3', component: DexieTasksTest3 },
		{ path: '/dexie_tasks/test4', component: DexieTasksTest4 },
		{ path: '/dexie_tasks', component: DexieTasks },
		{ path: '/dexie_tasks/new', component: DexieTasksNew },
		{ path: '/dexie_tasks/show/:id', component: DexieTasksShow },
		{ path: '/dexie_tasks/edit/:id', component: DexieTasksEdit },

	] 
})
