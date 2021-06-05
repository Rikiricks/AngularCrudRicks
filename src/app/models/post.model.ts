export class Post{
    POST_ID: number;
    DESCRIPTION: string;
    TITLE: string;
    CATEGORY_ID?: number;
    CREATED_DATE?: Date;
    constructor()
    {
        this.POST_ID = 1;
        // this.DESCRIPTION = null;
        // this.TITLE = null;
        // this.CATEGORY_ID = null;
        // this.CREATED_DATE = null;
    }
}

export class Categories{
    id: number;
    name: string;
    slug: string;
    post?: Post;
}
