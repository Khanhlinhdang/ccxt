import { Exchange } from '../../ccxt.js';
import { Str } from '../base/types.js';
import { baseMainTestClass } from './tests.helpers.js';
declare class testMainClass extends baseMainTestClass {
    parseCliArgs(): void;
    init(exchangeId: any, symbolArgv: any, methodArgv: any): Promise<void>;
    checkIfSpecificTestIsChosen(methodArgv: any): void;
    importFiles(exchange: Exchange): Promise<void>;
    loadCredentialsFromEnv(exchange: Exchange): void;
    expandSettings(exchange: Exchange): void;
    addPadding(message: string, size: any): string;
    exchangeHint(exchange: any, market?: any): string;
    testMethod(methodName: string, exchange: any, args: any[], isPublic: boolean): Promise<void>;
    getSkips(exchange: Exchange, methodName: string): any;
    testSafe(methodName: any, exchange: any, args?: any[], isPublic?: boolean): Promise<any>;
    runPublicTests(exchange: any, symbol: any): Promise<void>;
    runTests(exchange: any, tests: any, isPublicTest: boolean): Promise<void>;
    loadExchange(exchange: any): Promise<boolean>;
    getTestSymbol(exchange: any, isSpot: any, symbols: any): any;
    getExchangeCode(exchange: any, codes?: any): any;
    getMarketsFromExchange(exchange: any, spot?: boolean): {};
    getValidSymbol(exchange: any, spot?: boolean): any;
    testExchange(exchange: any, providedSymbol?: any): Promise<void>;
    runPrivateTests(exchange: any, symbol: any): Promise<void>;
    testProxies(exchange: any): Promise<void>;
    startTest(exchange: any, symbol: any): Promise<void>;
    assertStaticError(cond: boolean, message: string, calculatedOutput: any, storedOutput: any, key?: any): void;
    loadMarketsFromFile(id: string): any;
    loadCurrenciesFromFile(id: string): any;
    loadStaticData(folder: string, targetExchange?: Str): {};
    removeHostnamefromUrl(url: string): string;
    urlencodedToDict(url: string): {};
    assertNewAndStoredOutput(exchange: Exchange, skipKeys: string[], newOutput: any, storedOutput: any, strictTypeCheck?: boolean, assertingKey?: any): boolean;
    assertStaticRequestOutput(exchange: any, type: string, skipKeys: string[], storedUrl: string, requestUrl: string, storedOutput: any, newOutput: any): void;
    assertStaticResponseOutput(exchange: Exchange, skipKeys: string[], computedResult: any, storedResult: any): void;
    sanitizeDataInput(input: any): any[];
    testRequestStatically(exchange: any, method: string, data: object, type: string, skipKeys: string[]): Promise<void>;
    testResponseStatically(exchange: any, method: string, skipKeys: string[], data: object): Promise<void>;
    initOfflineExchange(exchangeName: string): Exchange;
    testExchangeRequestStatically(exchangeName: string, exchangeData: object, testName?: Str): Promise<boolean>;
    testExchangeResponseStatically(exchangeName: string, exchangeData: object, testName?: Str): Promise<boolean>;
    getNumberOfTestsFromExchange(exchange: any, exchangeData: object, testName?: Str): number;
    runStaticRequestTests(targetExchange?: Str, testName?: Str): Promise<void>;
    runStaticTests(type: string, targetExchange?: Str, testName?: Str): Promise<void>;
    runStaticResponseTests(exchangeName?: any, test?: any): Promise<void>;
    runBrokerIdTests(): Promise<void>;
    testBinance(): Promise<boolean>;
    testOkx(): Promise<boolean>;
    testCryptocom(): Promise<boolean>;
    testBybit(): Promise<boolean>;
    testKucoin(): Promise<boolean>;
    testKucoinfutures(): Promise<boolean>;
    testBitget(): Promise<boolean>;
    testMexc(): Promise<boolean>;
    testHtx(): Promise<boolean>;
    testWoo(): Promise<boolean>;
    testBitmart(): Promise<boolean>;
    testCoinex(): Promise<boolean>;
    testBingx(): Promise<void>;
    testPhemex(): Promise<void>;
    testBlofin(): Promise<void>;
    testHyperliquid(): Promise<void>;
    testCoinbaseinternational(): Promise<boolean>;
    testCoinbaseAdvanced(): Promise<boolean>;
    testWoofiPro(): Promise<boolean>;
    testOxfun(): Promise<boolean>;
    testXT(): Promise<boolean>;
    testVertex(): Promise<boolean>;
    testParadex(): Promise<boolean>;
}
export default testMainClass;
