import * as signalR from "@microsoft/signalr";

export function createNotificationConnection() {
    const token = localStorage.getItem("token");

    return new signalR.HubConnectionBuilder()
        .withUrl("http://localhost:5076/hubs/notifications", {
            accessTokenFactory: () => token
        })
        .withAutomaticReconnect()
        .configureLogging(signalR.LogLevel.Information)
        .build();
}