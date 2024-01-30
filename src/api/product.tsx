import { CEndpoint } from "@constants";
import { SubmitFeedbackRequest } from "@type/ajaxTypes";
import { CApi } from "@utility/apiService";
import { APP_NAME_CONST } from "@utility/constants";
import { Platform } from "react-native";

export class ProductApi {
    static getList = async ({ productTypeId }: { productTypeId?: string } = {}) => {
        try {
            const result = await CApi.get(CEndpoint.productGetList, {
                query: productTypeId !== undefined ? {
                    product_type_id: productTypeId,
                } : undefined
            });

            if (result.success === false) {
                throw result.message;
            }

            return result.data;

        } catch (e: any) {
            console.error(`[Error ${this.name}]: ${e.toString()}`);
            throw e;
        }
    }

    static getNativeList = async () => {
        try {
            const result = await CApi.get(CEndpoint.nativeProductGetList);

            if (result.success === false) {
                throw result.message;
            }

            return result.data;

        } catch (e: any) {
            console.error(`[Error ${this.name}]: ${e.toString()}`);
            throw e;
        }
    }

    static postValidateReceipt = async ({
        user_id,
        product_id,
        transaction_type,
        zf_channel,
        platform,
        channel_transaction_id,
        transaction_receipt,
        transaction_status,
        is_sb,
    }: {
        user_id: string;
        product_id: string;
        transaction_type: string;
        zf_channel: string;
        platform: string;
        channel_transaction_id: string | undefined;
        transaction_receipt: any;
        transaction_status: number;
        is_sb: number;
    }) => {
        try {
            const isIos = Platform.OS === 'ios';

            const result = await CApi.post(isIos ? CEndpoint.productPostValidateReceiptIos : CEndpoint.productPostValidateReceiptAndroid, {
                body: {
                    user_id,
                    product_id,
                    transaction_type,
                    zf_channel,
                    platform,
                    channel_transaction_id,
                    transaction_receipt,
                    transaction_status,
                    is_sb,
                }
            });

            if (result.success === false) {
                throw result.message;
            }

            return result;

        } catch (e: any) {
            console.error(`[Error ${this.name}]: ${e.toString()}`);
            throw e;
        }
    }

    static getFinzfTransaction = async ({ transactionId }: { transactionId: string }) => {
        try {
            const result = await CApi.get(CEndpoint.productGetFinzfTransaction, {
                query: {
                    transaction_id: transactionId,
                }
            });

            if (result.success === false) {
                throw result.message;
            }

            return result.data;

        } catch (e: any) {
            console.error(`[Error ${this.name}]: ${e.toString()}`);
            throw e;
        }
    }

    static postFinzfOrder = async ({
        productId,
        zfType,
    }: {
        productId: number;
        zfType: string;
    }) => {
        try {
            const result = await CApi.post(CEndpoint.productPostFinzfOrder, {
                body: {
                    product_id: productId,
                    zf_type: zfType,
                    platform: APP_NAME_CONST + "-" + Platform.OS.toUpperCase(),
                    redirect_to: "app",
                }
            });

            if (result.success === false) {
                throw result.message;
            }

            return result.data;

        } catch (e: any) {
            console.error(`[Error ${this.name}]: ${e.toString()}`);
            throw e;
        }
    }
}