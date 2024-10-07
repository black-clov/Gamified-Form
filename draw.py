import tkinter as tk
from tkinter import messagebox
import mysql.connector
from mysql.connector import Error
import threading
import time
import random

class TirageAuSortApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Tirage au Sort")
        self.root.geometry("500x400")
        self.root.resizable(False, False)

        # Database Connection Frame
        self.db_frame = tk.LabelFrame(root, text="MySQL Database Connection", padx=10, pady=10)
        self.db_frame.pack(padx=10, pady=10, fill="both")

        # Host
        tk.Label(self.db_frame, text="Host:").grid(row=0, column=0, sticky="e")
        self.host_entry = tk.Entry(self.db_frame, width=30)
        self.host_entry.grid(row=0, column=1, pady=5, padx=5)
        self.host_entry.insert(0, "localhost")  # Default value

        # Port
        tk.Label(self.db_frame, text="Port:").grid(row=1, column=0, sticky="e")
        self.port_entry = tk.Entry(self.db_frame, width=30)
        self.port_entry.grid(row=1, column=1, pady=5, padx=5)
        self.port_entry.insert(0, "3306")  # Default MySQL port

        # Username
        tk.Label(self.db_frame, text="Username:").grid(row=2, column=0, sticky="e")
        self.user_entry = tk.Entry(self.db_frame, width=30)
        self.user_entry.grid(row=2, column=1, pady=5, padx=5)

        # Password
        tk.Label(self.db_frame, text="Password:").grid(row=3, column=0, sticky="e")
        self.password_entry = tk.Entry(self.db_frame, width=30, show="*")
        self.password_entry.grid(row=3, column=1, pady=5, padx=5)

        # Database Name
        tk.Label(self.db_frame, text="Database:").grid(row=4, column=0, sticky="e")
        self.database_entry = tk.Entry(self.db_frame, width=30)
        self.database_entry.grid(row=4, column=1, pady=5, padx=5)

        # Table Name
        tk.Label(self.db_frame, text="Table:").grid(row=5, column=0, sticky="e")
        self.table_entry = tk.Entry(self.db_frame, width=30)
        self.table_entry.grid(row=5, column=1, pady=5, padx=5)

        # Column Name
        tk.Label(self.db_frame, text="Column (Team):").grid(row=6, column=0, sticky="e")
        self.column_entry = tk.Entry(self.db_frame, width=30)
        self.column_entry.grid(row=6, column=1, pady=5, padx=5)
        self.column_entry.insert(0, "Team")  # Default column name

        # Draw Button
        self.draw_button = tk.Button(root, text="Start Draw", command=self.start_draw, width=20, bg="blue", fg="white")
        self.draw_button.pack(pady=10)

        # Display Winner
        self.winner_label = tk.Label(root, text="", font=("Helvetica", 20), fg="green")
        self.winner_label.pack(pady=20)

        # Animation Control
        self.is_drawing = False

    def start_draw(self):
        # Retrieve database connection details
        host = self.host_entry.get().strip()
        port = self.port_entry.get().strip()
        user = self.user_entry.get().strip()
        password = self.password_entry.get().strip()
        database = self.database_entry.get().strip()
        table = self.table_entry.get().strip()
        column = self.column_entry.get().strip()

        # Validate inputs
        if not all([host, port, user, password, database, table, column]):
            messagebox.showerror("Input Error", "Please fill in all database connection fields.")
            return

        self.draw_button.config(state=tk.DISABLED)
        self.winner_label.config(text="Connecting to database...")

        # Start fetching data in a separate thread to prevent UI freezing
        threading.Thread(target=self.fetch_and_draw, args=(host, port, user, password, database, table, column)).start()

    def fetch_and_draw(self, host, port, user, password, database, table, column):
        try:
            # Establish database connection
            connection = mysql.connector.connect(
                host="84.235.229.18",
                port=3307,
                user="itech",
                password="[&HA3kdeBJu3V",
                database="participants"
            )

            if connection.is_connected():
                cursor = connection.cursor()
                query = f"SELECT `{column}` FROM `{table}`"
                cursor.execute(query)
                records = cursor.fetchall()

                # Extract team names
                teams = [record[0] for record in records if record[0]]
                if not teams:
                    raise ValueError(f"No data found in column '{column}' of table '{table}'.")

                # Start the animation
                self.is_drawing = True
                self.animate_selection(teams)

        except Error as e:
            self.show_error(f"MySQL Error:\n{e}")
        except ValueError as ve:
            self.show_error(str(ve))
        except Exception as ex:
            self.show_error(f"An unexpected error occurred:\n{ex}")
        finally:
            if 'connection' in locals() and connection.is_connected():
                cursor.close()
                connection.close()

    def animate_selection(self, teams):
        def run_animation():
            try:
                self.winner_label.config(text="Drawing...")
                start_time = time.time()
                duration = 5  # seconds
                while time.time() - start_time < duration and self.is_drawing:
                    selected = random.choice(teams)
                    self.winner_label.config(text=selected)
                    time.sleep(0.1)  # Update every 100ms
                if self.is_drawing:
                    winner = random.choice(teams)
                    self.winner_label.config(text=f"Winner: {winner}")
                self.is_drawing = False
                self.draw_button.config(state=tk.NORMAL)
            except Exception as ex:
                self.show_error(f"Animation Error:\n{ex}")

        threading.Thread(target=run_animation).start()

    def show_error(self, message):
        self.is_drawing = False
        self.draw_button.config(state=tk.NORMAL)
        self.winner_label.config(text="")
        messagebox.showerror("Error", message)

def main():
    root = tk.Tk()
    app = TirageAuSortApp(root)
    root.mainloop()

if __name__ == "__main__":
    main()
