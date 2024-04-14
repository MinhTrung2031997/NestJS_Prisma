import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BlogModuleBase } from "./base/blog.module.base";
import { BlogService } from "./blog.service";
import { BlogResolver } from "./blog.resolver";

@Module({
  imports: [BlogModuleBase, forwardRef(() => AuthModule)],
  providers: [BlogService, BlogResolver],
  exports: [BlogService],
})
export class BlogModule {}
