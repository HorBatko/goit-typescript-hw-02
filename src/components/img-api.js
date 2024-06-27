import axios from "axios";

export const getImages = async (setSearchQuery, setPage) => {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        query: setSearchQuery,
        client_id: "SGOZ0uwJ02aOpv6AoOhE63D9iSlUh8CocGPixTn-ZSc",
        page: setPage,
        per_page: 12,
      },
    });

 
    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};

