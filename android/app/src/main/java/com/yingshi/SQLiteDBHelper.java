package com.yingshi;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

public class SQLiteDBHelper extends SQLiteOpenHelper {
    private static final String DATABASE_NAME = "RKStorage";
    private static final int DATABASE_VERSION = 1;

    static final String TABLE_CATALYST = "catalystLocalStorage";
    static final String KEY_COLUMN = "key";
    static final String VALUE_COLUMN = "value";

    public SQLiteDBHelper(Context context) {
        super(context, DATABASE_NAME, null, DATABASE_VERSION);
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
        // Create your database tables here
        String createTableQuery = "CREATE TABLE IF NOT EXISTS " + TABLE_CATALYST + " (" +
            KEY_COLUMN + " TEXT PRIMARY KEY, " +
            VALUE_COLUMN + " TEXT" +
        ");";
        db.execSQL(createTableQuery);
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        // Upgrade the database, if needed
        // You can drop and recreate tables or add new columns here
    }
}
