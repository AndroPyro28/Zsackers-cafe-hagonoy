import { FilterItemsContainer, Search, CategoryList, Category, SubSetCategory, Filter } from './components'
function FilterItems() {
    return (
        <FilterItemsContainer>
            <Search>
                <label><i className="fa-solid fa-magnifying-glass"></i> </label>
                <input type="text" placeholder='Search by name...' />
            </Search>
            <CategoryList>
                <Category>
                    All
                </Category>
                <Category>
                    Donut
                </Category>
                <Category>
                    Burger
                </Category>
                <Category>
                    Coffee
                </Category>
                <Category>
                    Pizza
                </Category>
                <Category>
                    Milk tea
                </Category>
                <Category>
                    Frappe
                </Category>
            </CategoryList>

            <SubSetCategory>
                <Filter>
                    <label htmlFor="subcategory">Subcategory:</label>
                    <select name="" id="subcategory">
                        <option value="">Select</option>
                    </select>
                </Filter>
                <Filter>
                    <label htmlFor="setcategory">Setcategory:</label>
                    <select name="" id="setcategory">
                        <option value="">Select</option>
                    </select>
                </Filter>
            </SubSetCategory>
        </FilterItemsContainer>
    )
}

export default FilterItems