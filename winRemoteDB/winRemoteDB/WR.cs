using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SQLite;

namespace winRemoteDB
{
    class WR
    {
        static void Main(string[] args)
        {

            string createKeyCodeTable = @"CREATE TABLE IF NOT EXISTS
                                        [WR_KeyCode] (
                                        [kc_ID] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                                        [kc_Value] NVARCHAR(16) NOT NULL,
                                        [kc_Description] NVARCHAR(4000) NOT NULL,
                                        [kc_Switch] BIT NOT NULL)";

            string createMacroTable = @"CREATE TABLE IF NOT EXISTS
                                        [WR_Macro] (
                                        [mc_ID] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                                        [mc_kc_ID] INTEGER NOT NULL,
                                        [mc_Group] INTEGER NOT NULL,
                                        [mc_Order] INTEGER NOT NULL)";

            string createButtonTable = @"CREATE TABLE IF NOT EXISTS
                                        [WR_Button] (
                                        [btn_ID] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                                        [btn_mc_ID] INTEGER NOT NULL,
                                        [btn_Description] NVARCHAR(4000) NOT NULL)";

            SQLiteConnection.CreateFile("winRemote.db3");
            using (SQLiteConnection conn = new SQLiteConnection("data source = winRemote.db3"))
            {
                using (SQLiteCommand cmd = new SQLiteCommand(conn))
                {
                    conn.Open();


                    cmd.CommandText = createKeyCodeTable;
                    cmd.ExecuteNonQuery();
                    cmd.CommandText = createMacroTable;
                    cmd.ExecuteNonQuery();
                    cmd.CommandText = createButtonTable;
                    cmd.ExecuteNonQuery();


                    cmd.CommandText = "INSERT INTO WR_KeyCode(kc_Value, kc_Description, kc_Switch) values('x079', 'This is a test of the keycode table', 0)";
                    cmd.ExecuteNonQuery();
                    cmd.CommandText = "INSERT INTO WR_KeyCode(kc_Value, kc_Description, kc_Switch) values('x081', 'This is a test of the keycode table', 1)";
                    cmd.ExecuteNonQuery();

                    cmd.CommandText = "INSERT INTO WR_Macro(mc_kc_ID, mc_Group, mc_Order) values(1, 1, 1)";
                    cmd.ExecuteNonQuery();
                    cmd.CommandText = "INSERT INTO WR_Macro(mc_kc_ID, mc_Group, mc_Order) values(2, 2, 2)";
                    cmd.ExecuteNonQuery();

                    cmd.CommandText = "INSERT INTO WR_Button(btn_mc_ID, btn_Description) values(1, 'This is a test of button table')";
                    cmd.ExecuteNonQuery();
                    cmd.CommandText = "INSERT INTO WR_Button(btn_mc_ID, btn_Description) values(2, 'This is a test of button table')";
                    cmd.ExecuteNonQuery();

                    cmd.CommandText = "SELECT * FROM WR_KeyCode";
                    using (SQLiteDataReader reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            Console.WriteLine(reader["kc_Value"] + ":" + reader["kc_Description"] + ":" + reader["kc_Switch"]);
                        }
                        //conn.Close();
                    }
                    cmd.CommandText = "SELECT * FROM WR_Macro";
                    using (SQLiteDataReader reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            Console.WriteLine(reader["mc_kc_ID"] + ":" + reader["mc_Group"] + ":" + reader["mc_Order"]);
                        }
                        //conn.Close();
                    }
                    cmd.CommandText = "SELECT * FROM WR_Button";
                    using (SQLiteDataReader reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            Console.WriteLine(reader["btn_mc_ID"] + ":" + reader["btn_Description"]);
                        }
                        //conn.Close();
                    }

                }
                conn.Close();
            }

            Console.ReadLine();


            
        }
    }
}
