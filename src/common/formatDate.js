import moment from "moment";

export default function formatDate(date) {
  return date ? moment(date.toDate()).format("ddd, MMM D YYYY, h:mm A") : "";
}
