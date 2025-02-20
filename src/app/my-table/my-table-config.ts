export class MyTableConfig{
    headers: MyHeaders[] | undefined;
    order: MyOrder | undefined;
    search: MySearch | undefined;
    pagination: MyPagination | undefined;
    actions: MyActions[] | undefined;
}

export interface MyHeaders {
    name: string;
    field: string;
    sorting: "asc" | "desc";
}

export interface MyOrder{
    defaultColumn: string | undefined;
    orderType: string | undefined;
}

export interface MyActions{
    label: string | undefined;
    css: any | undefined;
}

export interface MySearch{
    columns: string[] | undefined;
}

export interface MyPagination{
    itemPerPage: number | undefined;
    itemPerPageOption: number | undefined;
}