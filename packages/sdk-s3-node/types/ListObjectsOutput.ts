import {_UnmarshalledObject} from './_Object';
import {_UnmarshalledCommonPrefix} from './_CommonPrefix';
import * as __aws_types from '@aws/types';

/**
 * ListObjectsOutput shape
 */
export interface ListObjectsOutput {
    /**
     * A flag that indicates whether or not Amazon S3 returned all of the results that satisfied the search criteria.
     */
    IsTruncated?: boolean;

    /**
     * _Marker shape
     */
    Marker?: string;

    /**
     * When response is truncated (the IsTruncated element value in the response is true), you can use the key name in this field as marker in the subsequent request to get next set of objects. Amazon S3 lists objects in alphabetical order Note: This element is returned only if you have delimiter request parameter specified. If response does not include the NextMaker and it is truncated, you can use the value of the last Key in the response as the marker in the subsequent request to get the next set of object keys.
     */
    NextMarker?: string;

    /**
     * _ObjectList shape
     */
    Contents?: Array<_UnmarshalledObject>;

    /**
     * _BucketName shape
     */
    Name?: string;

    /**
     * _Prefix shape
     */
    Prefix?: string;

    /**
     * _Delimiter shape
     */
    Delimiter?: string;

    /**
     * _MaxKeys shape
     */
    MaxKeys?: number;

    /**
     * _CommonPrefixList shape
     */
    CommonPrefixes?: Array<_UnmarshalledCommonPrefix>;

    /**
     * Encoding type used by Amazon S3 to encode object keys in the response.
     */
    EncodingType?: 'url'|string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}