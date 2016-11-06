package my.antonov.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Properties;

/**
 * Created by alex on 05.11.2016.
 */
public class TestingProperties {

    private final static String PATH = "settings.properties";

    public static String URL = "";
    public static String BROWSER = "";

    static {

        Properties props = new Properties();

        try (

                InputStream stream = Thread.currentThread().getContextClassLoader().getResourceAsStream(PATH);
                InputStreamReader reader = new InputStreamReader(stream);
                BufferedReader br = new BufferedReader(reader);
        )
        {

            props.load(reader);

            URL = props.getProperty(IProperties.URL);
            BROWSER = props.getProperty(IProperties.BROWSER);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
