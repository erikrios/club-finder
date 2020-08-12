import clubs from "./clubs.js";

class DataSource {

    static searchClub(keyword) {
        return fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`);
    }
}

export default DataSource;