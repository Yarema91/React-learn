const html5rocks = {};
const DB_VERSION = 1;
const DB_NAME = 'budget';

html5rocks.indexedDB = {};
html5rocks.indexedDB.db = null;

html5rocks.indexedDB.onerror = (e) => {
console.log(e);
};

function open(e) {
    return new Promise(function (resilve, reject) {
        const request = indexedDB.open( DB_NAME, DB_VERSION);

        // WE can't only create Object stores  in a version change to transform 
         
        request.onupgradeneeded = (e) => {
            const bd = e.target.result;
            // a version change to transform is  started
            e.target.transaction.onerror = html5rocks.indexedDB.on //!
            if(db.objectStoreNames.contains(DB_NAME)) {
            db.deleteObjectStore(DB_NAME);
            }
            db.createObjectStore(DB_NAME, {keyPath:'id'})
        };
        request.onsuccess = (e) => {
            reject(Error(e))
        };
        
    })
};
function addItem (item) {
    const db = html5rocks.indexedDB.db;
    const trans = db.transaction([DB_NAME], 'readwrite');
    const store = trans.objectStore(DB_NAME);

    const request = store.put(item);
    request.onsuccess = (e) => {
        console.log('success');
    };
    request.onerror = (e) => {
        console.log('error adding: ', e);
    };
};

function deleteItem (id) {
    const db = html5rocks.indexedDB.db;
    const trans = db.transaction([DB_NAME], 'readwrite');
    const store = trans.objectStore(DB_NAME);

    const request = store.delete(id);
    request.onsuccess = (e) => {
        console.log('success');
    };
    request.onerror = (e) => {
        console.log('error deleting: ', e);
    };
};

function getItems () {
    return new Promise((resolve, reject) => {
        
    })
    
}