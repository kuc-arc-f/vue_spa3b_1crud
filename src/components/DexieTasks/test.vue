<template>
    <div>
        <h1>DoxieTasks- test:</h1>
        <hr />
        data : {{ data1 }}
        <hr />
        <button v-on:click="test1()">[ test1 ]</button>

    </div>
</template>

<script>
import {Mixin} from '../../mixin'
import Dexie from 'dexie';

var db = null;
//var db = new Dexie("friend_database");
//
export default {
    mixins:[Mixin],
    created() {
        db = new Dexie( this.sysConst.DEXIE_DB_NAME );
        db.version(this.sysConst.DEXIE_DB_VERSION).stores(
        this.sysConst.DEXIE_DB_STORE );               
        /*
         db.version(1).stores({
              friends: 'name,shoeSize'
          });
        */
//          this.add_item()
//          this.get_items()
    },
    data() {
        return {
            user : [],
            message : "data: Hello-TestChild-123",
            child_data : "hoge",
            data1 : "",
        }
    },
    methods: {
        test1(){
//             db.tasks.clear()
//            var date = new Date("2020-06-29T00:31:52.546Z");
//            console.log("# test1" + date)
        },
        getTasks(){
        },
        /*
        add_item(){
            db.friends.add({
                name: "Nicolas", 
                shoeSize: 8,
            });
            db.friends.add({
                name: "Kotan", 
                shoeSize: 6,
            });

        },
        */
        get_items(){
            db.friends
                .toArray()
                .then(function (items ) {
                    console.log( items );
                });
        },

    }
}
</script>

