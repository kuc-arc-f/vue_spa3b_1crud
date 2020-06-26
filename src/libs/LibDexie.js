import Dexie from 'dexie';

//
export default {
    init_proc :function(){
        var db = new Dexie("test_idx_db5");
        db.version(1).stores({
            person: '++id, name, age',
            tasks: '++id, title, content ,created_at',
        });
        return db
    },
    get_item: async function(items, pos){
        var ret = null;
        items.forEach(function(item){
//            console.log(item.id );
            if(item.id == pos){
                ret = item
            }
        });
        return ret
    },    
}
