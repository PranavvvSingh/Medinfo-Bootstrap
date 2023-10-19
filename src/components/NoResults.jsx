import SearchOff from "@mui/icons-material/SearchOffOutlined";

export default function NoResults({ searchText }) {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "70vh" }}
    >
      <h2 className="opacity-50">
        <SearchOff fontSize="lg" /> No results found for "{searchText}"
      </h2>
    </div>
  );
}
