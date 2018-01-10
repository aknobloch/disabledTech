package com.disabledtech.winremote.view;

import android.app.Activity;
import android.content.Context;
import android.view.View;
import android.widget.GridLayout;

import com.disabledtech.winremote.R;
import com.disabledtech.winremote.model.WinAction;
import com.disabledtech.winremote.model.WinActionButton;

import java.util.List;

/**
 * Created by Taylor on 11/17/2017.
 */

public class ViewManager {
    public static void populateActivityButtons(Context c, List<WinAction> userActions, View.OnClickListener listener)
    {
        GridLayout layout =(GridLayout)((Activity) c).findViewById(R.id.grid_layout);

        // TODO pretty buttons
        for (WinAction action : userActions)
        {
            WinActionButton actionButton = new WinActionButton(c, action);
            actionButton.setOnClickListener(listener);
            layout.addView(actionButton);
        }
    }
}
