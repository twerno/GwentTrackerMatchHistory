export enum FilterActionEnum {
    SELECTED,
    UNSELECTED
}

export class FilterEvent {

    constructor(public action: FilterActionEnum, public value: string) { }
}
