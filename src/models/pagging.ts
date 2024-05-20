export class PaggingObject<T> {
    Page: number;
    TotalPageCount: number;
    Limit: number;
    Total: number;
    List: T[];
    Header?: { Referer: string };

    public constructor(data: {
        Page: number;
        TotalPageCount: number;
        Limit: number;
        Total: number;
        List: T[];
        Header?: { Referer: string };
    }) {
        this.Page = data.Page;
        this.TotalPageCount = data.TotalPageCount;
        this.Limit = data.Limit;
        this.Total = data.Total;
        this.List = data.List;
        this.Header = data.Header;
    }

    public static fromJson = <T>(json: any, mapping: (json: any) => T[]): PaggingObject<T> => {
        return new PaggingObject({
            Page: json.Page,
            TotalPageCount: json.TotalPageCount,
            Limit: json.Limit,
            Total: json.Total,
            List: mapping(json.List),
            Header: json.Header,
        });
    }

    public static fromApiArr = <T>(arr: any[]): PaggingObject<T> => {
        return new PaggingObject({
            Page: arr[0],
            TotalPageCount: arr[0],
            Limit: arr[0],
            Total: arr[0],
            List: arr[0],
            Header: arr[0],
        });
    }
}