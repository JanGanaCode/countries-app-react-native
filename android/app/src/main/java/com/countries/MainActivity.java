package com.countries;

import com.facebook.react.ReactActivity;
import android.widget.LinearLayout;
import android.graphics.Color;
import android.widget.TextView;
import android.view.Gravity;
import android.util.TypedValue;

public class MainActivity extends ReactActivity {
    
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Countries";
    }

    public LinearLayout createSplashLayout(){
      LinearLayout view = new LinearLayout(this);

      TextView textView = new TextView(this);

      view.setBackgroundColor(Color.parseColor("#ffffff"));
      view.setGravity(Gravity.CENTER);

      textView.setTextColor(Color.parseColor("#3d9dff"));
      textView.setText("Countries");
      textView.setGravity(Gravity.CENTER);
      textView.setTextSize(TypedValue.COMPLEX_UNIT_DIP, 40);

      view.addView(textView);
      return view;
    }
}
