﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using InTheHand.Net;
using InTheHand.Net.Bluetooth;
using InTheHand.Net.Sockets;
using System.IO;

namespace BTConnectionService
{
    public class BTConnectionServer
    {
        static readonly Guid UUID = new Guid("{2BBF4D1B-9A19-4709-9399-B6AB4A88E777}");

        public BTConnectionServer()
        {

        }

        public void StartServer()
        {
            // TODO synchronous server 
            Console.WriteLine("Begin init.");
            var bluetoothListener = new BluetoothListener(UUID);
            bluetoothListener.Start();

            Console.WriteLine("Begin accepting socket.");
            BluetoothClient connection = bluetoothListener.AcceptBluetoothClient();
            Stream connectionStream = connection.GetStream();

            Console.WriteLine("Begin reading.");

            while (connectionStream.CanRead)
            {
                int data = connectionStream.ReadByte();

                if (data != -1)
                {
                    Console.WriteLine(data);
                }
            }

            Console.WriteLine("End reading.");
        }
    }
}
