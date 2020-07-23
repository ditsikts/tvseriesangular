export function distinctCategoriesAndCount(tvSeriesList: any): Map<string, number> {
    let categoriesCountMap = new Map();
    //get categories distinct and how many times find each
    for (let m of tvSeriesList) {
        for (let c of m.categories) {
            if (categoriesCountMap.has(c.category)) {
                categoriesCountMap.set(c.category, categoriesCountMap.get(c.category) + 1);
            }
            else {
                categoriesCountMap.set(c.category, 1);
            }
        }
    }
    return categoriesCountMap;
}
