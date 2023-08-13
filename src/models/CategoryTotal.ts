export interface ICategoryTotal {
    category: string;
    total: number;
}

export class CategoryTotal implements ICategoryTotal {
    category!: string;
    total!: number;

    constructor(data?: ICategoryTotal) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property)) {
                    (this as any)[property] = (data as any)[property];
                }
            }
        }
    }

    init(data: any) {
        if (data) {
            this.category = data['category'];
            this.total = data['total'];
        }
    }

    static fromJson(data: any): ICategoryTotal {
        data = typeof data === 'object' ? data : {};

        let result = new CategoryTotal();
        result.init(data);

        return result;
    }

    toJson() {
        const result: any = {
            category: this.category,
            total: this.total,
        };

        return result;
    }
}
