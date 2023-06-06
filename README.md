# JSON Response tag for Google Tag Manager Server Side

## How to use JSON Response tag

If you need, for example, to export Google Universal Analytics raw data to BigQuery, you need to have a JSON HTTP request tag template installed on your GTM Container.

Create a new JSON HTTP request tag and fill “Destination URL” with the URL you got when creating Cloud Function and add to the end of it your secret key like this “?key=your-secret-key”. Don’t forget to add the trigger you use to determine Universal Analytics.



## Open Source

JSON Response Tag for GTM Server Side is developed and maintained by [Stape Team](https://stape.io/) under the Apache 2.0 license.
