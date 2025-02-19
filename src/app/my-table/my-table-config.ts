import { MyHeaders } from "../my-headers.interface";
import { MyOrder } from "../my-order";
import { MyPagination } from "../my-pagination";
import { MySearch } from "../my-search";

export class MyTableConfig{
    headers: MyHeaders[] | undefined;
    order: MyOrder | undefined;
    search: MySearch | undefined;
    pagination: MyPagination | undefined;
}