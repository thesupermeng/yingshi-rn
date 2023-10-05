//
//  ATSplashViewController.h
//  AnyThinkSDKDemo
//
//  Created by Jason on 2020/12/3.
//  Copyright © 2020 AnyThink. All rights reserved.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@protocol NativeViewControllerDelegate <NSObject>
- (void)nativeViewControllerDidFinish;
@end

@interface ATSplashViewController : UIViewController
@property (weak, nonatomic) id<NativeViewControllerDelegate> delegate;
@end

NS_ASSUME_NONNULL_END
