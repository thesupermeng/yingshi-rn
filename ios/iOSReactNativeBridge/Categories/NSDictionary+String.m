//
//  NSDictionary+String.m
//  demo_reactnative
//
//  Created by Jason on 2020/9/18.
//

#import "NSDictionary+String.h"

NSString *const atPlacementIdKey = @"placementId";
NSString *const atExtraKey = @"adCallbackInfo";
NSString *const atErrMsgKey = @"errorMsg";

NSString *const kATUnityUserExtraDataKey = @"user_load_extra_data";
NSString *const kATUnityCheckLoadModelAdInfoKey = @"adInfo";

@implementation NSDictionary (String)

- (NSString *)at_jsonString {
  
  NSError *error;
  NSData *jsonData;
  
  NSMutableDictionary *extraDictM = [NSMutableDictionary dictionaryWithDictionary:self[kATUnityCheckLoadModelAdInfoKey]];
  NSMutableDictionary *extraDataTemp = [NSMutableDictionary dictionary];
  NSMutableDictionary *extraDataDictM = [NSMutableDictionary dictionaryWithDictionary:self[kATUnityCheckLoadModelAdInfoKey][kATUnityUserExtraDataKey]];
  for (NSString *key in extraDataDictM.allKeys) {
      if ([extraDataDictM[key] isKindOfClass:[NSString class]] || [extraDataDictM[key] isKindOfClass:[NSNumber class]]) {
          [extraDataTemp setValue:extraDataDictM[key] forKey:key];
      }
  }
  if ([extraDataTemp count]) {
      [extraDictM setValue:extraDataTemp forKey:kATUnityUserExtraDataKey];
  } else {
      [extraDictM removeObjectForKey:kATUnityUserExtraDataKey];
  }
  
  @try {
      jsonData = [NSJSONSerialization dataWithJSONObject:extraDictM
                                                         options:kNilOptions
                                                           error:&error];
  } @catch (NSException *exception) {
      return @"{}";
  } @finally {}
  
  if (!jsonData) {
      return @"{}";
  } else {
      return [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
  }
  
}

- (NSString *)at_AdInfojsonString {
  
  NSError *error;
  NSData *jsonData;
  
  NSMutableDictionary *extraDictM = [NSMutableDictionary dictionaryWithDictionary:self[kATUnityCheckLoadModelAdInfoKey]];
  NSMutableDictionary *extraDataTemp = [NSMutableDictionary dictionary];
  NSMutableDictionary *extraDataDictM = [NSMutableDictionary dictionaryWithDictionary:self[kATUnityCheckLoadModelAdInfoKey][kATUnityUserExtraDataKey]];
  for (NSString *key in extraDataDictM.allKeys) {
      if ([extraDataDictM[key] isKindOfClass:[NSString class]] || [extraDataDictM[key] isKindOfClass:[NSNumber class]]) {
          [extraDataTemp setValue:extraDataDictM[key] forKey:key];
      }
  }
  if ([extraDataTemp count]) {
      [extraDictM setValue:extraDataTemp forKey:kATUnityUserExtraDataKey];
  } else {
      [extraDictM removeObjectForKey:kATUnityUserExtraDataKey];
  }
  NSMutableDictionary *jsonDictM = [NSMutableDictionary dictionaryWithDictionary:self];
  [jsonDictM setValue:extraDictM forKey:kATUnityCheckLoadModelAdInfoKey];
  
  @try {
      jsonData = [NSJSONSerialization dataWithJSONObject:jsonDictM
                                                         options:kNilOptions
                                                           error:&error];
  } @catch (NSException *exception) {
      return @"{}";
  } @finally {}
  
  if (!jsonData) {
      return @"{}";
  } else {
      return [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
  }
  
}


@end
