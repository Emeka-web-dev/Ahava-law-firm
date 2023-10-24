type Base = {
    _id: string;
    _rev: string;
    _updatedAt: string;
    _createdAt: string;
}

type Image = {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    }
}
export interface Home extends Base {
    _type: "home";
    caption: string;
    philosophy: string;
    mission: string;
    vision: string;
    header: string;
    socialLinks: string[];
    illustrationImage: Image;
    bgImage: Image;
}

export interface Teamz extends Base {
    _type: "team";
    name: string;
    role: string;
    proficiency: string;
    image: Image;
    socialLinks: string[];
}

export interface AboutUs extends Base {
    _type: "about";
    header: string;
    caption: string;
    backgroundImage: Image;
    illustrationImage: Image;
}

export interface Contact extends Base {
    _type: "contact";
    email: string;
    phone: string;
    address: string;
    backgroundImage: Image;
    socialLinks: string[];
}

export interface AboutPoints extends Base {
    _type: "aboutPoint";
    header: string;
    caption: string;
    backgroundImage: Image;
}

