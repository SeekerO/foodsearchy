export default function useSearch(data, input) {
  var search = input.toLowerCase();
  const result = data?.filter((meta_data) => {
    return meta_data.strMeal.toLowerCase().includes(search);
  });

  return result;
}
