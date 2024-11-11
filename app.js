class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function addTwoNumbers(l1, l2) {
    let dummy = new Node(0);
    let current = dummy;
    let carry = 0;
  
    while (l1 || l2) {
      let x = l1 ? l1.val : 0;
      let y = l2 ? l2.val : 0;
      let sum = x + y + carry;
      carry = Math.floor(sum / 10);
      current.next = new Node(sum % 10);
      current = current.next;
      if (l1) l1 = l1.next;
      if (l2) l2 = l2.next;
    }
  
    if (carry > 0) {
      current.next = new Node(carry);
    }
  
    return dummy.next;
  }

  const l1 = [2,4,3]
  const l2 = [5,6,4]    

  console.log(addTwoNumbers(l1,l2))