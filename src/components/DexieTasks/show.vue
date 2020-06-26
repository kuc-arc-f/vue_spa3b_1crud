<template>
    <div>
        <router-link :to="'/doxie_tasks'" class="btn btn-outline-primary mt-2">Back
        </router-link>
        <hr class="mt-2 mb-2" />        
        <h3>title : {{ title }}</h3>
        <div v-text="content"></div>
        ID : {{ id }}
        <hr />
    </div>
</template>

<script>
import {Mixin} from '../../mixin'
import Dexie from 'dexie';

var db = null
//
export default {
    mixins:[Mixin],
    created() {
        this.id = parseInt(this.$route.params.id)
        db = new Dexie( this.sysConst.DEXIE_DB_NAME );
        db.version(this.sysConst.DEXIE_DB_VERSION).stores(this.sysConst.DEXIE_DB_STORE );                 
        this.get_item( this.id )
    },
    data: function( ) {
        var itemDat = {title : '', content : ''}
        return {
            id : 0,
            item: itemDat,
            key_name : "tasks", 
            tasks : [],
            title:'',
            content:'',            
        }
    },
    methods: {
        async get_item(id){
            const item = await db.tasks.get(id);
            this.title = item.title
            this.content = item.content            
//            console.log('data: ', item) 
        },
    }
}
</script>


