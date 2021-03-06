import idb from 'idb'

const dbPromise = idb.open('progressus-store', 1, upgradeDB => {
  upgradeDB.createObjectStore('willProgressus')
})
 
export default {
  get(key) {
    return dbPromise.then(db => {
      return db.transaction('willProgressus')
        .objectStore('willProgressus').get(key)
    })
  },
  set(key, val) {
    return dbPromise.then(db => {
      const tx = db.transaction('willProgressus', 'readwrite')
      tx.objectStore('willProgressus').put(val, key)
      return tx.complete
    })
  },
  delete(key) {
    return dbPromise.then(db => {
      const tx = db.transaction('willProgressus', 'readwrite')
      tx.objectStore('willProgressus').delete(key)
      return tx.complete
    })
  },
  clear() {
    return dbPromise.then(db => {
      const tx = db.transaction('willProgressus', 'readwrite')
      tx.objectStore('willProgressus').clear()
      return tx.complete
    })
  },
  keys() {
    return dbPromise.then(db => {
      const tx = db.transaction('willProgressus')
      const keys = []
      const store = tx.objectStore('willProgressus')
 
      // This would be store.getAllKeys(), but it isn't supported by Edge or Safari.
      // openKeyCursor isn't supported by Safari, so we fall back
      (store.iterateKeyCursor || store.iterateCursor).call(store, cursor => {
        if (!cursor) return
        keys.push(cursor.key)
        cursor.continue()
      })
 
      return tx.complete.then(() => keys)
    })
  }
}