package com.firstutility.fits;

import org.junit.Assert;
import org.junit.Test;

/**
 * this class is needed to avoid Hudson issue:
 * ERROR: Publisher hudson.tasks.junit.JUnitResultArchiver aborted due to exception
 * hudson.AbortException: No test report files were found. Configuration error?
 */
public class HudsonSupportTest {

    @Test
    public void test1() {
        Assert.assertEquals(4, 2 + 2);
    }
}
