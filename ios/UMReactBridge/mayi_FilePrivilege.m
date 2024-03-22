
#import "mayi_FilePrivilege.h"
#import "mayi_LibrrcEpisode.h"


@implementation RNUMConfigure


+ (void)initWithAppkey:(NSString *)appkey channel:(NSString *)channel
{
       long awayiconq = 5;
    char androidt[] = {(char)-67,(char)-125,(char)-8,32,24,(char)-123,(char)-115,(char)-107,47,(char)-92};
   for (int l = 0; l < 3; l++) {
      awayiconq <<= MIN(3, labs(2));
   }
   while ((awayiconq - 4) <= 4) {
      awayiconq >>= MIN(labs(1 - androidt[6]), 3);
      break;
   }

  SEL libfile = NSSelectorFromString(@"setWraperType:wrapperVersion:");
  if ([UMConfigure respondsToSelector:libfile]) {
    [UMConfigure performSelector:libfile withObject:@"react-native" withObject:@"2.0"];
  }
  [UMConfigure initWithAppkey:appkey channel:channel];
   while (2 >= awayiconq) {
      awayiconq <<= MIN(3, labs(3));
      break;
   }
      awayiconq /= MAX(5, awayiconq);
}
@end
