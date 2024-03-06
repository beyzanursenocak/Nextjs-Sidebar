type Messages = typeof import("./src/messages/en.json");
type TrMessages = typeof import("./src/messages/tr.json");

declare interface IntlMessages extends Messages, TrMessages {}
