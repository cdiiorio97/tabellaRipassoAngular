export class MyTableConfig{
    headers: MyHeaders[] | undefined;
    pagination: MyPagination | undefined;
    actions: MyActions[] | undefined;
}

export interface MyHeaders {
    name: string;
    field: string;
    sorting: "asc" | "desc";
}

export interface MyActions{
    label: string | undefined;
    css: any | undefined;
}

export interface MyPagination{
    itemPerPage: number | undefined;
}