// *Function for Category Deatiled List API Calling -

const category_detail_list = async (req, res) => {
    const host = 'https://testapi.arbsindia.com/public/api';
    const endpoint = 'get-public-category-details-list';

    try {
        const category_detail_list = await fetch("https://testapi.arbsindia.com/public/api/get-public-category-details-list",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    business_id: 105
                })
            }
        );

        const data = await category_detail_list.json();

        return data;
    } catch (error) {
        return res.status(500).json(error);
    };
};

export default category_detail_list;
