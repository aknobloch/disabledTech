package com.example.taylor.myapplication;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;


public class MainActivity extends Activity implements View.OnClickListener{

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

        public void onClick(View view) {
            TextView tv = (TextView) findViewById(R.id.textView);
            Button b1 = (Button) findViewById(R.id.button1);

            tv.setText(b1.getText());
        }

    public void onClickOne(View view) {
        TextView tv = (TextView) findViewById(R.id.textView);
        Button b2 = (Button) findViewById(R.id.button2);

        tv.setText(b2.getText());
    }

    public void onClickTwo(View view) {
        TextView tv = (TextView) findViewById(R.id.textView);
        Button b3 = (Button) findViewById(R.id.button3);

        tv.setText(b3.getText());

    }

    public void onClickThree(View view) {
        TextView tv = (TextView) findViewById(R.id.textView);
        Button b4 = (Button) findViewById(R.id.button4);

        tv.setText(b4.getText());
    }
}
