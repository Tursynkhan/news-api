type ConstructOf<T> = { new (...args: unknown[]): T; prototype: T };

export function assertIsDefined<T>(value: T): asserts value is NonNullable<T> {
    if (value === undefined) {
        throw new Error('Value is not defined');
    }
    if (value === null) {
        throw new Error('Value is null');
    }
}

export function assertObjectType<T>(object: unknown, expectedType: ConstructOf<T>): asserts object is NonNullable<T> {
    assertIsDefined(object);
    if (!(object instanceof expectedType)) {
        throw new Error(`Expected object to be of type ${expectedType.name}`);
    }
}
export const queryElement = <T extends HTMLElement>(
    container: Element | Document | DocumentFragment,
    selector: string,
    expectedType: ConstructOf<T>
): T => {
    const element = container.querySelector<T>(selector);
    assertObjectType(element, expectedType);
    return element;
};
