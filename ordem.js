const list1 = [1, 2, 3, 4, 5]
const list2 = [1, 2, 3, 4, 5]

const merge = (list1, list2) => {
    return [...list1, ...list2].sort((a, b) => a - b)
}   

console.log(merge(list1, list2))
const mergeLists = (head1, head2) => {
    const dummy = new ListNode(0)
    let current = dummy

    while (head1 && head2) {
        if (head1.val < head2.val) {
            current.next = head1
            head1 = head1.next
        } else {
            current.next = head2
            head2 = head2.next
        }
        current = current.next
    }

    current.next = head1 || head2

    return dummy.next
}
class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

console.log(mergeLists(list1, list2))
