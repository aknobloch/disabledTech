package com.disabledtech.winremote.model;

import android.content.Context;
import android.content.res.TypedArray;
import android.util.AttributeSet;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import com.disabledtech.winremote.R;
import com.disabledtech.winremote.utils.Device;
import com.disabledtech.winremote.view.MainActivity;

/**
 * This class is a simple wrapper around the AppCompatButton to
 * associate a WinAction with said button. It automatically
 * sets the display name and provides convenience methods.
 * <p>
 * Created by aknobloch on 10/10/2017.
 */

public class WinActionButton extends android.support.v7.widget.AppCompatButton
{

int remoteId;
    public WinActionButton(Context context, AttributeSet attrs){
        super(context,attrs);
        if(isInEditMode())
            return;
        TypedArray a = context.obtainStyledAttributes(attrs, R.styleable.WinActionButton );
        final int N = a.getIndexCount();
        for (int i = 0; i < N; ++i) {
            switch (a.getIndexCount()){
                case R.attr.remoteId:
                    remoteId=a.getInt(i, 0);
                    break;
            }
        }
        a.recycle();
    }
    public WinActionButton(Context context)
    {
        super(context);
        if(isInEditMode())
            return;
        //m_Action = action;
        //this.setText(action.getDisplayName());

        setOnClickListener(this);
    }
    public WinActionButton(Context context, WinAction action)
    {
        super(context);
        m_Action = action;
        this.setText(action.getDisplayName());

        setOnClickListener(this);
    }

    private void setOnClickListener(WinActionButton winActionButton) {
        ((MainActivity)getContext()).send(m_Action);
    }

	private WinAction m_Action;




	public String getDisplayName()
	{
		return (String) this.getText();
	}

	public int getActionID()
	{
		return m_Action.getID();
	}


    public WinAction getWinAction()
    {
        return m_Action;
    }

    public void setAction(WinAction a) {
        m_Action=a;
    }

}
