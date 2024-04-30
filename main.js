function analyzeData(data) {
  if (!data || data.length === 0) {
    return "No data available";
  }

  function getStatusDescription(status) {
    switch (status) {
      case "active":
        return "active status";
      case "inactive":
        return "inactive status";
      default:
        return "unknown status";
    }
  }

  function getTypeDescription(type, value, status) {
    if (type === "A") {
      if (value > 10) {
        return `Type ${type} data with value greater than 10 and ${getStatusDescription(
          status
        )}`;
      } else {
        return `Type ${type} data with value less than or equal to 10 and ${getStatusDescription(
          status
        )}`;
      }
    } else {
      if (value > 5) {
        return `Type ${type} data with value greater than 5 and ${getStatusDescription(
          status
        )}`;
      } else {
        return `Type ${type} data with value less than or equal to 5 and ${getStatusDescription(
          status
        )}`;
      }
    }
  }

  let result = "";
  for (let i = 0; i < data.length; i++) {
    const { type, value, status } = data[i];
    if (type === "A" || type === "B") {
      result += getTypeDescription(type, value, status) + "\n";
    } else {
      result += "Unknown data type\n";
    }
  }
  return result;
}

console.log(
  analyzeData([
    { type: "A", value: 5, status: "inactive" },
    { type: "B", value: 42, status: "active" },
    { type: "B", value: 3 },
    { type: "B", value: 6, status: "inactive" },
  ])
);
