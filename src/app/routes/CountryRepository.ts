import { Country } from './Country';

export class CountryRepository {
    static countries: Country[] =
        [
            { Code: 'IN', Name: "India", Capital: "New Delhi" },
            { Code: "US", Name: "United States America", Capital: "Washington DC" },
            { Code: "CH", Name: "China", Capital: "Beijing" },
            { Code: "SP", Name: "Spain", Capital: "Madrid" },
            { Code: "UK", Name: "United Kindom", Capital: "London" }
        ];

    static GetCountries(): Country[] {
        return this.countries;
    }

    static getCountry(code: string): Country {
        for (var c of this.countries) {
            if (c.Code == code) {
                return c;
            }
        }
        return null; // country is not found
    }

    static addCountry(country: Country) {
        this.countries.push(country);
    }

    static deleteCountry(code: string): boolean {
        var idx: number = 0;
        for (var c of this.countries) {
            if (c.Code == code) {
                this.countries.splice(idx, 1);
                return true;
            }
            idx++;
        }
        return false; // country isn't found
    }
}