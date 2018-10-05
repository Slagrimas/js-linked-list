/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  let head = null;
  let tail = null;
  let prev = null;

  function getHead() {
    return head;
  }

  function getTail() {
    return tail;
  }

  function add(value) {
    let newNode = {
      value: value,
      prev: tail,
      next: null
    };

    if (!head) {      
      head = newNode;
      prev = null;
      tail = newNode;

    } else {
      tail.next = newNode;
      prev = tail;
      tail = newNode;
    }
    return tail;
  }

  function get(index) {
    if (index < 0 || !head) {
      return false;

    } else if (index === 0) {
      return head;
    
    } else { 
      let currentNode = head;
      let thisObjPosition = 0;

      while (thisObjPosition<index) {
          if(currentNode.next){
              thisObjPosition++;
              currentNode = currentNode.next;
          }else{
              return false
          }
      }
          console.log(currentNode);
          return currentNode;
    }
  }

  function remove(index) {
    let previousNode = get(index - 1); 
    let currentNode = get(index);

    if (!currentNode) {
      return false;
    
    } else if (!previousNode) {
      head = currentNode.next;
    
    } else if (!currentNode.next) {
      tail = previousNode;
      tail.next = null;
    
    } else {
      previousNode.next = currentNode.next;
    }
  }

  function insert(value, index) {
    let prevoius = (index - 1);
  }
  //incomplete! dwd
  
  return {
    getHead:getHead,
    getTail:getTail,
    add:add,
    get:get,
    remove:remove,
    insert:insert,
  }
}