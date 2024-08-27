type Node<T> = { 
    value: T,
    prev?: Node<T>,
}
export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        this.length++;
        if (!this.head) {
            this.head = { value: item } as Node<T>;
        }
        this.head = { value: item, prev: this.head } as Node<T>;
}
    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        if (this.length === 0) {
            const value = this.head?.value;
            this.head = undefined;
            return value;
        }
        const value = this.head?.value;
        this.head = this.head?.prev;
        return value;


}
    peek(): T | undefined {
        return this.head?.value;
}
}